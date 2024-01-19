import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"DM Sans", sans-serif"',
      },
    }),
  },
});

const AppTheme = extendTheme(overrides);

export default AppTheme;
