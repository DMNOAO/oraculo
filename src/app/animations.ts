import { AnimationController } from '@ionic/angular';

export const customPageTransition = (baseEl: HTMLElement, opts?: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const animationCtrl = new AnimationController();

  // Animación de entrada
  const enteringAnimation = animationCtrl
    .create()
    .addElement(enteringEl)
    .duration(500)
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  // Animación de salida
  const leavingAnimation = animationCtrl
    .create()
    .addElement(leavingEl)
    .duration(500)
    .fromTo('opacity', '1', '0')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  // Combina ambas animaciones
  return animationCtrl
    .create()
    .addAnimation([enteringAnimation, leavingAnimation]);
};
