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