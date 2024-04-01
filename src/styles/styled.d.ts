// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      pinkBackground: string;
      blueBackground: string;
      greyBackground: string;
    };
  }
}
