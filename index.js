// Ejemplo de como utilizar GSAp
// Ejemplo utilizando ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: ".c", // Activar ScrollTrigger en el elemento .a
    x: 200, // 200 pixeles hacia la derecha
    rotation: 360, // 360 grados de rotación
    duration: 3, // Duración de 3 segundos de la animación
    transformOrigin: "50% 50%", // Centrar la animación
})


gsap.to(".b", {
    scrollTrigger: ".b", // Activar ScrollTrigger en el elemento .a
    x: 200, // 200 pixeles hacia la derecha
    rotation: 360, // 360 grados de rotación
    duration: 3, // Duración de 3 segundos de la animación
    transformOrigin: "50% 50%", // Centrar la animación
    scale: 0.2, // Escalar la animación a 0.5
    opacity: 0.5, // Opacidad de la animación a 0.5
})