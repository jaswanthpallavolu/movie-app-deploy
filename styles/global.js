import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    margin:0;
    padding:0;

    --primary:${({ theme }) => theme.primary};
    --secondary:${({ theme }) => theme.base};
    --third:${({ theme }) => theme.light};

    --base-color:${({ theme }) => theme.base};
    --light-shade:${({ theme }) => theme.light};
    --accent-light:${({ theme }) => theme.accent};
    --accent-dark:${({ theme }) => theme.accentDark};

     --font-primary:${({ theme }) => theme.fontP};
     --font-secondary:${({ theme }) => theme.fontS};

     font-family:'Open sans',sans-serif;

     --card-shadow:${({ theme }) => theme.cardShadow};
     --button-shadow:${({ theme }) => theme.buttonShadow};

     --skeleton-color:${({ theme }) => theme.skeletonColor}
}

`;
