/* tslint:disable */

declare var Object: any;
export interface McqInterface {
  "question"?: string;
  "opt1"?: string;
  "opt2"?: string;
  "opt3"?: string;
  "opt4"?: string;
  "ans"?: string;
  "id"?: number;
  "chapterId"?: number;
}

export class Mcq implements McqInterface {
  "question": string;
  "opt1": string;
  "opt2": string;
  "opt3": string;
  "opt4": string;
  "ans": string;
  "id": number;
  "chapterId": number;
  constructor(data?: McqInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Mcq`.
   */
  public static getModelName() {
    return "Mcq";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Mcq for dynamic purposes.
  **/
  public static factory(data: McqInterface): Mcq{
    return new Mcq(data);
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
      name: 'Mcq',
      plural: 'Mcqs',
      path: 'Mcqs',
      idName: 'id',
      properties: {
        "question": {
          name: 'question',
          type: 'string'
        },
        "opt1": {
          name: 'opt1',
          type: 'string'
        },
        "opt2": {
          name: 'opt2',
          type: 'string'
        },
        "opt3": {
          name: 'opt3',
          type: 'string'
        },
        "opt4": {
          name: 'opt4',
          type: 'string'
        },
        "ans": {
          name: 'ans',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "chapterId": {
          name: 'chapterId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
