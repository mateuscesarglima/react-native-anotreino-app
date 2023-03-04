import "styled-components";
import themes from "@Global/themes";

declare module "styled-components" {
  type ThemeType = typeof themes;
  export interface DefaultTheme extends ThemeType {}
}
