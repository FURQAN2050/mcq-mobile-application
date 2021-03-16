/* tslint:disable */
import {
  Mcq
} from '../index';

declare var Object: any;
export interface ChapterInterface {
  "name"?: string;
  "id"?: number;
  "subjactId"?: number;
  mcqs?: Mcq[];
}

export class Chapter implements ChapterInterface {
  "name": string;
  "id": number;
  "subjactId": number;
  mcqs: Mcq[];
  constructor(data?: ChapterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chapter`.
   */
  public static getModelName() {
    return "Chapter";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chapter for dynamic purposes.
  **/
  public static factory(data: ChapterInterface): Chapter{
    return new Chapter(data);
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
      name: 'Chapter',
      plural: 'Chapters',
      path: 'Chapters',
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
        "subjactId": {
          name: 'subjactId',
          type: 'number'
        },
      },
      relations: {
        mcqs: {
          name: 'mcqs',
          type: 'Mcq[]',
          model: 'Mcq',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'chapterId'
        },
      }
    }
  }
}
