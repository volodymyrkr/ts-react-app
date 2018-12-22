import DemoComponent from "../../demos/demo_0001/components/DemoComponent";
import FormComponent from "../../demos/demo_0002/components/FormComponent";
import CurrencyList from "../../demos/demo_0003/components/CurrencyList";
import CurrenciesPage from "../../demos/demo_0004/components/CurrenciesPage";
import Demo0005 from "../../demos/demo_0005";
import Demo0007 from "../../demos/demo_0007";
import Demo0008 from "../../demos/demo_0008";
import Demo0009 from "../../demos/demo_0009";
import Demo0010 from "../../demos/demo_0010";
import Demo0011 from "../../demos/demo_0011";
import Demo0012 from "../../demos/demo_0012";

export interface IDemoProps {
  name: string,
    link: string,
    title: string,
    description: string
}

export const demos:ReadonlyArray<IDemoProps> = [
  {name: "Demo_0001", link: "/demo_0001", title: "Demo", description: "Some description"},
  {name: "Demo_0002", link: "/demo_0002", title: "Demo", description: "Some description"},
  {name: "Demo_0003", link: "/demo_0003", title: "Demo", description: "Some description"},
  {name: "Demo_0004", link: "/demo_0004", title: "Demo", description: "Some description"},
  {name: "Demo_0005", link: "/demo_0005", title: "Demo", description: "Some description"},
  {name: "Demo_0007", link: "/demo_0007", title: "Demo", description: "It's just a little demo of creating stream from document events"},
  {name: "Demo_0008", link: "/demo_0008", title: "Demo", description: "It's just a little demo of Mobx using"},
  {name: "Demo_0009", link: "/demo_0009", title: "Demo", description: "It's just a little demo of SVG using"},
  {name: "Demo_0010", link: "/demo_0010", title: "Demo", description: "ProgressBarComponent"},
  {name: "Demo_0011", link: "/demo_0011", title: "Demo", description: "DragonTigerToe"},
  {name: "Demo_0012", link: "/demo_0012", title: "Demo", description: "Punk API demo application"},
];

export const RouteComponentMapper = {
  "Demo_0001": DemoComponent,
  "Demo_0002": FormComponent,
  "Demo_0003": CurrencyList,
  "Demo_0004": CurrenciesPage,
  "Demo_0005": Demo0005,
  "Demo_0007": Demo0007,
  "Demo_0008": Demo0008,
  "Demo_0009": Demo0009,
  "Demo_0010": Demo0010,
  "Demo_0011": Demo0011,
  "Demo_0012": Demo0012
}