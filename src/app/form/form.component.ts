import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'userName': new FormControl('',
        Validators.maxLength(50)),
      'userEmail': new FormControl(''),
      //   [
      //   Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}'),
      //   Validators.maxLength(50)
      // ]),
      'userPhone': new FormControl('', [
        Validators.pattern('^[0-9 ()+]+$'),
        Validators.maxLength(50)
      ]),
      'userMessage': new FormControl('',
        Validators.maxLength(250)
        ),
    });
  }

  submit() {
    const req = new XMLHttpRequest();
    const number1 = (<HTMLInputElement>document.getElementById('number1')).value;
    const number2 = (<HTMLInputElement>document.getElementById('number2')).value;
    const number3 = (<HTMLInputElement>document.getElementById('number3')).value;
    const number4 = (<HTMLInputElement>document.getElementById('number4')).value;
    const dataToSend = '?number1=' + number1 + '&number2=' + number2 + '&number3=' + number3 + '&number4=' + number4;
    req.open('GET', 'WebCalculator.php' + dataToSend, true);
    req.onreadystatechange = handleServerResponse;
    req.send();
    // document.getElementById('result').innerHTML =
    //   'The request has been sent.';

    function handleServerResponse() {
      if ((req.readyState === 4) && (req.status === 200)) {
        const result = req.responseText;
        document.getElementById('result').innerHTML =
          'The answer is ' + result + '.';
      }
    }
  }

  ngOnInit() {
  }
}
