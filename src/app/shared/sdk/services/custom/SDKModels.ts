/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Account } from '../../models/Account';
import { Class } from '../../models/Class';
import { Subjact } from '../../models/Subjact';
import { Chapter } from '../../models/Chapter';
import { Mcq } from '../../models/Mcq';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Account: Account,
    Class: Class,
    Subjact: Subjact,
    Chapter: Chapter,
    Mcq: Mcq,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
