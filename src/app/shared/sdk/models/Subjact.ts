/* tslint:disable */
import {
  Chapter
} from '../index';

declare var Object: any;
export interface SubjactInterface {
  "name"?: string;
  "id"?: number;
  "classId"?: number;
  chapters?: Chapter[];
}

export class Subjact implements SubjactInterface {
  "name": string;
  "id": number;
  "classId": number;
  chapters: Chapter[];
  constructor(data?: SubjactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Subjact`.
   */
  public static getModelName() {
    return "Subjact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Subjact for dynamic purposes.
  **/
  public static factory(data: SubjactInterface): Subjact{
    return new Subjact(data);
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
      name: 'Subjact',
      plural: 'Subjacts',
      path: 'Subjacts',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "classId": {
          name: 'classId',
          type: 'number'
        },
      },
      relations: {
        chapters: {
          name: 'chapters',
          type: 'Chapter[]',
          model: 'Chapter',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'subjactId'
        },
      }
    }
  }
}
