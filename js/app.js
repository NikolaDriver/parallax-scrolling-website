window.addEventListener('scroll', e =>
document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
)
gsep.registerPlagin(ScrollTrigger, ScrolSmoother)
ScrolSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})