import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as handpose from '@tensorflow-models/handpose';
import colorLabels from '../../Models/Colors/color_labels.json';
import '../../styles/PracticeSign/PracticeSign.css';

function PracticeSign() {
  const navigate = useNavigate();
  const location = useLocation();
  const { nivel, categoria, senia } = location.state || {};
  const [buttonText, setButtonText] = useState("Iniciar práctica");
  const [recording, setRecording] = useState(false);
  const [predictedLabel, setPredictedLabel] = useState(null);
  const [recognitionProgress, setRecognitionProgress] = useState(0); // Nuevo estado para el porcentaje
  const videoRef = useRef(null);
  const detectorRef = useRef(null);
  const handDetectorRef = useRef(null);
  const sequence = useRef([]);
  const countdown = useRef(5); // Cuenta regresiva de 5 segundos
  const frameCount = useRef(0); // Contador de frames
  const fps = 15;
  const frameInterval = 1000 / fps;

  // Definir detectLandmarks antes de useEffect
  const detectLandmarks = useCallback(async () => {
    if (!detectorRef.current || !handDetectorRef.current) return;

    // Cargar modelo de reconocimiento de señas
    const model = await tf.loadLayersModel('../../Models/Colors/model.json');

    const captureFrame = async () => {
      if (videoRef.current.readyState === 4 && recording) {
        const frameData = await processFrame();
        sequence.current.push(frameData);
        frameCount.current += 1;

        // Calcular el porcentaje de frames grabados
        const progressPercentage = (frameCount.current / 60) * 100;
        setRecognitionProgress(progressPercentage);

        // Si hemos capturado 60 frames, obtenemos una predicción y restablecemos el botón
        if (frameCount.current >= 60) {
          const inputTensor = tf.tensor([sequence.current]);
          const prediction = model.predict(inputTensor);
          const predictedIndex = prediction.argMax(-1).dataSync()[0];
          const label = colorLabels[predictedIndex] || 'Desconocido';
          setPredictedLabel(label);

          // Reset para la próxima grabación
          sequence.current = [];
          setRecording(false);
          setButtonText("Iniciar práctica");
          frameCount.current = 0;
          setRecognitionProgress(0); // Reiniciar el progreso
        } else {
          setTimeout(captureFrame, frameInterval); // Continuar capturando frames
        }
      }
    };

    captureFrame();
  }, [recording]);

  useEffect(() => {
    const initCameraAndModels = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        detectorRef.current = await poseDetection.createDetector(
          poseDetection.SupportedModels.BlazePose,
          { runtime: 'tfjs' }
        );

        handDetectorRef.current = await handpose.load();

        detectLandmarks();
      } catch (error) {
        console.error("Error al acceder a la cámara o cargar modelos: ", error);
      }
    };

    initCameraAndModels();

    const videoElement = videoRef.current;
    return () => {
      if (videoElement && videoElement.srcObject) {
        videoElement.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [detectLandmarks]);

  const processFrame = async () => {
    const frameData = [];
    const frame = tf.browser.fromPixels(videoRef.current);

    // Detectar poses
    const poseResults = await detectorRef.current.estimatePoses(videoRef.current);
    if (poseResults.length > 0) {
      const keypoints = poseResults[0].keypoints;
      const poseLandmarks = keypoints.map((k) => [k.x, k.y, k.z]);
      frameData.push(...poseLandmarks.flat());
    }

    // Detectar manos
    const handsResults = await handDetectorRef.current.estimateHands(videoRef.current);
    if (handsResults.length > 0) {
      handsResults.forEach((hand) => {
        const handLandmarks = hand.landmarks;
        frameData.push(...handLandmarks.flat());
      });
    }

    return frameData;
  };

  const startPractice = () => {
    countdown.current = 5;
    setButtonText(countdown.current);

    // Cuenta regresiva
    const countdownInterval = setInterval(() => {
      countdown.current -= 1;
      setButtonText(countdown.current > 0 ? countdown.current : "Grabando...");

      if (countdown.current <= 0) {
        clearInterval(countdownInterval);
        setRecording(true); // Iniciar grabación
        setPredictedLabel(null);
        sequence.current = [];
        frameCount.current = 0; // Reiniciar contador de frames
      }
    }, 1000);
  };

  return (
    <div className="practice-sign">
      <div className="practice-sign-content">
        <button className="back-button" onClick={() => navigate('/select-sign', { state: { nivel, categoria } })}>
          &lt; Volver
        </button>

        <h1>{nivel} - {categoria} - {senia}</h1>

        <div className="horizontal-container">
          <div className="static-image">
            {/* Aquí puedes colocar la imagen estática */}
          </div>

          <div className="progress-section">
            <label>{recognitionProgress.toFixed(0)}%</label> {/* Mostrar porcentaje redondeado */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${recognitionProgress}%` }}></div> {/* Ajustar ancho */}
            </div>
          </div>

          <div className="camera-view">
            <video ref={videoRef} autoPlay muted className="video-feed" />
          </div>
        </div>

        <button className="start-practice-button" onClick={startPractice} disabled={recording}>
          {buttonText}
        </button>

        {predictedLabel && (
          <div className="label-display">
            <h3>Seña detectada: {predictedLabel}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default PracticeSign;