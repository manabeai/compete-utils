// export type Util<T extends string> = T extends `${string}Util` ? T : never;
// export type CardFrameProps<T extends string> = {
//     title: string;
//     card: Util<T>;
// };

// export type FactrizationUtil = {

// }

// type MyCardFrameProps = CardFrameProps<'ExampleUtls'>;  // ExampleUtil型がcardに使える
// type AnotherCardFrameProps = CardFrameProps<'AnotherUtil'>;  // AnotherUtil型がcardに使える