/* tslint:disable */
import {
  Subjact
} from '../index';

declare var Object: any;
export interface ClassInterface {
  "name"?: string;
  "value"?: string;
  "id"?: number;
  subjects?: Subjact[];
}

export class Class implements ClassInterface {
  "name": string;
  "value": string;
  "id": number;
  subjects: Subjact[];
  constructor(data?: ClassInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Class`.
   */
  public static getModelName() {
    return "Class";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Class for dynamic purposes.
  **/
  public static factory(data: ClassInterface): Class{
    return new Class(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Class',
      plural: 'Classes',
      path: 'Classes',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "value": {
          name: 'value',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        subjects: {
          name: 'subjects',
          type: 'Subjact[]',
          model: 'Subjact',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'classId'
        },
      }
    }
  }
}
