import {
  color,
  extendTheme,
  FormLabel,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: `Ubuntu`,
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "28px",
          md: "30px",
        },
        color: "p.black",
        lineHeight: {
          base: "32px",
          md: "34px",
        },
      },
      h2: {
        fontSize: {
          base: "22px",
          md: "26px",
        },
        color: "p.black",
        lineHeight: { base: "26px", md: "30px" },
      },

      h3: {
        fontSize: {
          base: "20px",
          md: "22px",
          xl: "30px",
        },
        color: "p.black",

        lineHeight: { base: "24px", md: "26px", xl: "34px" },
      },

      h4: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",

        lineHeight: { base: "22px", md: "24px" },
      },
      h5: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.black",

        lineHeight: { base: "20px", md: "22px" },
      },
      h6: {
        fontSize: {
          base: "14px",
          md: "16px",
        },
        color: "p.black",

        lineHeight: { base: "18px", md: "20px" },
      },
    },
    fontSizes: {
      xs: "10px",
      sm: "12px",
      base: { base: "14px", md: "16px" },
      lg: { base: "16px", md: "18px" },
      xl: { base: "18px", md: "20px" },
      "2xl": { base: "20px", md: "22px" },
      "3xl": { base: "22px", md: "26px" },
      "4xl": { base: "28px", md: "30px" },
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#F3F3F7",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",

              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",

            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);