"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CosmicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        // Create particle material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.015,
            color: 0xd4af37,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse move handler
        const handleMouseMove = (event: MouseEvent) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate particles slowly
            particlesMesh.rotation.y += 0.0005;
            particlesMesh.rotation.x += 0.0002;

            // Parallax effect with mouse
            particlesMesh.rotation.x += mouseRef.current.y * 0.00005;
            particlesMesh.rotation.y += mouseRef.current.x * 0.00005;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
            />
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-cosmic-900" />
        </>
    );
}
