import { LightningElement } from 'lwc';

export default class TypingText extends LightningElement {
    renderedCallback() {
        this.displayTypingOutput();
      }
    
      displayTypingOutput() {

        const welcomeMsg = 'You can manage your booking applications here. '+
        'It makes your life easy.'+
        'Patience will be appreciated.'+
        'Thanks for choosing us.';
        const typingOutput = welcomeMsg;
        const typingSpeed = 35; 
    
        let i = 0;
        const timer = setInterval(() => {
          if (i >= typingOutput.length) {
            clearInterval(timer);
            return;
          }
          const currentText = this.template.querySelector('.typing-output').textContent;
          this.template.querySelector('.typing-output').textContent = currentText + typingOutput[i];
          i++;
        }, typingSpeed);
      }
}