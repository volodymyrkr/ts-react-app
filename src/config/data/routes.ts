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
import Demo0013 from "../../demos/demo_0013";
import Demo0014 from "../../demos/demo_0014";

export interface IDemoProps {
  name: string,
    link: string,
    title: string,
    description: string
}

export const demos:ReadonlyArray<IDemoProps> = [
  {name: "demo-0001", link: "/demo_0001", title: "Demo", description: "Some description"},
  {name: "demo-0002", link: "/demo_0002", title: "Demo", description: "Some description"},
  {name: "demo-0003", link: "/demo_0003", title: "Demo", description: "Some description"},
  {name: "demo-0004", link: "/demo_0004", title: "Demo", description: "Some description"},
  {name: "demo-0005", link: "/demo_0005", title: "Demo", description: "Some description"},
  {name: "demo-0007", link: "/demo_0007", title: "Demo", description: "It's just a little demo of creating stream from document events"},
  {name: "demo-0008", link: "/demo_0008", title: "Demo", description: "It's just a little demo of Inversify using"},
  {name: "demo-0009", link: "/demo_0009", title: "Demo", description: "It's just a little demo of SVG using"},
  {name: "demo-0010", link: "/demo_0010", title: "Demo", description: "ProgressBarComponent"},
  {name: "demo-0011", link: "/demo_0011", title: "Demo", description: "DragonTigerToe"},
  {name: "demo-0012", link: "/demo_0012", title: "Demo", description: "Punk API demo application with using superagent"},
  {name: "demo-0013", link: "/demo_0013", title: "Demo", description: "Punk API demo application with using mobx and fetch"},
  {name: "demo-0014", link: "/demo_0014", title: "Demo", description: "MobX Contacs demo is added"},
];

export const RouteComponentMapper = {
  "demo-0001": DemoComponent,
  "demo-0002": FormComponent,
  "demo-0003": CurrencyList,
  "demo-0004": CurrenciesPage,
  "demo-0005": Demo0005,
  "demo-0007": Demo0007,
  "demo-0008": Demo0008,
  "demo-0009": Demo0009,
  "demo-0010": Demo0010,
  "demo-0011": Demo0011,
  "demo-0012": Demo0012,
  "demo-0013": Demo0013,
  "demo-0014": Demo0014
}