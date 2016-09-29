import {
    Component,
    EventEmitter,
    Output,
    trigger,
    state,
    transition,
    keyframes,
    group,
    animate,
    query,
    group,
    style,
    sequence,
    HostBinding,
    HostListener
} from '@angular/core';

@Component({
    selector: 'modal',
    styleUrls: ['demo_4/modal.css'],
    template: `
      <div class="modal-frame" @showScreen></div>
      <div class="modal-container" @showModal>
        <header #header>Superman</header>
        <div #body class="body">
            <p>
Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America's heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and the American way!
           </p>
            <p>
Superman represents the best attributes of humanity and the ultimate force for good imaginable. Superman represents us at our absolute best. He's an ideal of humanity but flawed and relatable enough to be a compelling character, not a distant icon. The irony behind Superman for me is that despite being an alien with godlike powers, he's as human as the rest of us due to his upbringing from Jonathan and Martha Kent. His selfless attitude, compassionate demeanor and desire to always do the right thing are traits we could learn from and aspire to in real life. Superman's been used in my upbringing as a source of moral code and remains to me the archetype of the superhero by which all others are measured. 
            </p>
        </div>
        <footer #footer>
            The author of these world class Angular 2.0 Animations is Matias Niemelä from the Angular Core Team, he lives here
            http://www.yearofmoo.com/
        </footer>
        <button #close (click)="close()" class="close-button">X</button>
      </div>  
    `,
    animations: [
        trigger('showScreen', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ])
        ]),
        trigger('showModal', [
            transition('void => *', [
                group([
                    style({ opacity: 0 }),
                    query('header', style({ opacity: 0 })),
                    query('body', style({ opacity: 0 })),
                    query('footer', style({ opacity: 0 })),
                    query('close', style({ opacity: 0 }))
                ]),
                group([
                    style({ height: 200, width: '30%', transform: 'translateX(-50%) translateY(-70%)' }),
                    animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(-50%) translateY(-50%)' })),
                    query('header', [
                        animate('0.8s 150ms cubic-bezier(.48,.1,.51,1)', keyframes([
                            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                            style({ transform: 'scale(1)', offset: 0.75 }),
                            style({ opacity:1, offset: 1 })
                        ]))
                    ]),
                    query('body', [
                        animate('0.8s 400ms cubic-bezier(.48,.1,.51,1)', keyframes([
                            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                            style({ transform: 'scale(1)', offset: 0.75 }),
                            style({ opacity: 1, offset: 1 })
                        ]))
                    ]),
                    query('footer', [
                        animate('0.8s 500ms cubic-bezier(.48,.1,.51,1)', keyframes([
                            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
                            style({ transform: 'scale(1)', offset: 0.75 }),
                            style({ opacity: 1, offset: 1 })
                        ]))
                    ]),
                    query('close', [
                        animate('0.5s 400ms', keyframes([
                            style({ opacity: 0, transform: 'scale(1.2)', offset: 0 }),
                            style({ opacity: 1, transform: 'scale(1)', offset: 1 })
                        ]))
                    ]),
                    animate('500ms cubic-bezier(.29,.55,.53,1.53)', style({ height: '*', width: '*' })),
                ]),
            ])
        ])
    ]
})
export class Modal {
    @Output("close")
    closeEvent = new EventEmitter();

    close() {
        this.closeEvent.next();
    }
}