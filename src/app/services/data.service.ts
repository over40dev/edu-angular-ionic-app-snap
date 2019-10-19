import { Injectable } from '@angular/core';
import IPic from '../interfaces/IPic';

@Injectable({
  providedIn: 'root'
})
export default class DataService {

  constructor() { }

  save(pics: IPic[]) {
    console.log('save...', pics);
  }
}
