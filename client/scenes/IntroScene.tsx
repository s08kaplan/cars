"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CarModel from "src/components/Car/CarModel";
import LampModel from "src/components/Lamp/LampModel";
import SceneText from "./Scene-Text";

const IntroScene = () => {
  const [showSceneText, setShowSceneText] = useState(false);
  const navigate = useNavigate();

  const timeToNavigate = 9000;
  const timeToShowText = 4000; 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, timeToNavigate);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setShowSceneText(true)
    }, timeToShowText);
    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <section className="background-color-change min-w-dvw min-h-dvh">
      {showSceneText ? (
        <>
          <SceneText />
        </>
      ) : (
        <div>
          <LampModel />
          <h1 className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 slide-in-right text-2xl">
            AutoDen finds you what you need
          </h1>
          <CarModel />
        </div>
      )}
    </section>
  );
};

export default IntroScene;
