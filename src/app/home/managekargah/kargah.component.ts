import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'kargah',
    templateUrl: './kargah.component.html',

})
export class AddKargahComponent implements OnInit {
    constructor(private fb: FormBuilder, private http: HttpClient) { }

    ins;

    formModel = this.fb.group({
        Instrumexts: [''],
        Instrumexts1: [''],
        Instrumexts2: [''],
        Instrumexts3: [''],
        Instrumexts4: [''],
        Instrumexts5: [''],
        Instrumexts6: [''],
        Instrumexts7: [''],
        Instrumexts8: [''],
        Instrumexts9: [''],
        History: [''],
        Time: [''],
        State: [''],
        City: [''],
        Village: [''],
        FullAddress: [''],
        LocationE: [''],
        LocationN: [''],
    });

    selectedArray: any = [];


    selectMember(data) {
        if (data.checked == true) {
            this.selectedArray.push(data);
        } else {
            let newArray = this.selectedArray.filter(function (el) {
                return el.id !== data.id;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    }

    onSubmit(){
        if (this.selectedArray[0] != null) {
            this.formModel.value.Instrumexts = this.selectedArray[0].id;
        } else {
            this.formModel.value.Instrumexts = 0;
        }
        if (this.selectedArray[1] != null) {
            this.formModel.value.Instrumexts1 = this.selectedArray[1].id;
        } else {
            this.formModel.value.Instrumexts1 = 0;
        }
        if (this.selectedArray[2] != null) {
            this.formModel.value.Instrumexts2 = this.selectedArray[2].id;
        } else {
            this.formModel.value.Instrumexts2 = 0;
        }
        if (this.selectedArray[3] != null) {
            this.formModel.value.Instrumexts3 = this.selectedArray[3].id;
        } else {
            this.formModel.value.Instrumexts3 = 0;
        }
        if (this.selectedArray[4] != null) {
            this.formModel.value.Instrumexts4 = this.selectedArray[4].id;
        } else {
            this.formModel.value.Instrumexts4 = 0;
        }
        if (this.selectedArray[5] != null) {
            this.formModel.value.Instrumexts5 = this.selectedArray[5].id;
        } else {
            this.formModel.value.Instrumexts5 = 0;
        }
        if (this.selectedArray[6] != null) {
            this.formModel.value.Instrumexts6 = this.selectedArray[6].id;
        } else {
            this.formModel.value.Instrumexts6 = 0;
        }
        if (this.selectedArray[7] != null) {
            this.formModel.value.Instrumexts7 = this.selectedArray[7].id;
        } else {
            this.formModel.value.Instrumexts7 = 0;
        }
        if (this.selectedArray[8] != null) {
            this.formModel.value.Instrumexts8 = this.selectedArray[8].id;
        } else {
            this.formModel.value.Instrumexts8 = 0;
        }
        if (this.selectedArray[9] != null) {
            this.formModel.value.Instrumexts9 = this.selectedArray[9].id;
        } else {
            this.formModel.value.Instrumexts9 = 0;
        }

        var body = {
            Instrumexts: this.formModel.value.Instrumexts,
            Instrumexts1: this.formModel.value.Instrumexts1,
            Instrumexts2: this.formModel.value.Instrumexts2,
            Instrumexts3: this.formModel.value.Instrumexts3,
            Instrumexts4: this.formModel.value.Instrumexts4,
            Instrumexts5: this.formModel.value.Instrumexts5,
            Instrumexts6: this.formModel.value.Instrumexts6,
            Instrumexts7: this.formModel.value.Instrumexts7,
            Instrumexts8: this.formModel.value.Instrumexts8,
            Instrumexts9: this.formModel.value.Instrumexts9,
            History: this.formModel.value.History,
            Time: true,
            State: this.formModel.value.State,
            City: this.formModel.value.City,
            Village: this.formModel.value.Village,
            FullAddress: this.formModel.value.FullAddress,
            LocationE: this.formModel.value.LocationE,
            LocationN: this.formModel.value.LocationN,
        };

        this.http.post('http://178.22.123.86/maapi/api/KargahSakhtSazs', body).subscribe(
            res =>
            {
                if (res == true) {
                    window.location.reload();
                }
            }
        )
    }

    ngOnInit(): void {
        this.http.get('http://178.22.123.86/maapi/api/Instrumexts').subscribe(res => {

            this.ins = res;
        });
     }
}
