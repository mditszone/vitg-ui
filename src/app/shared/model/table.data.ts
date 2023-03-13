export class TableData {
    nameOfTable = "";
    buttonName = "Click"
    buttonRoute: string = "";
    headers: string[];
    rowData: any[] = [];

    createAction(icon: string, route: string, id: number) {
      return {
        icon: icon,
        route: route,
        routeArgs: id
      }
    }

    createtRowData(values: Array<string>, actions: Array<any>): Array<any> {
      const array: any = [];
      for (let val of values) array.push(val);
      array.push(actions);

      return array;

    }

  }

  export class Action {
    icon: string;
    route: string;
    routeArgs: number

    constructor(icon: string, route: string, routeArgs: number) {
      this.icon = icon;
      this.route = route;
      this.routeArgs = routeArgs;
    }

    getAction() {
      return {
        icon: this.icon,
        route: this.route,
        routeArgs: this.routeArgs
      }
    }

  }