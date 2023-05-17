# Karate

```scss
.Home {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;

    & .hero {
        width: 100%;
        min-height: 40rem;
        height: fit-content;
        display: flex;
        flex-direction: row;

        background-image: linear-gradient(to left, transparent, white), url("uema.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        // border: solid blue;

        & .heroContent {
            // margin: 1rem;
            z-index: 1;
            width: 50%;
            height: fit-content;
            padding: 2rem 0 0 1rem;
            // border: solid;


            & h1 {
                font-family: 'Wix Madefor Display', sans-serif;
                font-size: 3rem;
                line-height: 1.5em;
                text-shadow: 0 0 20px white;

                &::selection {
                    color: rgb(255, 255, 255);
                    background: rgb(0, 0, 0);
                }

                @media screen and (max-width: 400px) {
                    font-size: .8rem;
                }
            }

            & p {
                font-family: 'Wix Madefor Display', sans-serif;
                width: 100%;
                padding: 0;
                margin: 0 0 1rem 0;
                font-weight: bolder;
                font-size: 1.5rem;
                // text-align: justify;
                text-shadow: 0 0 10px white;

                &::selection {
                    color: rgb(255, 255, 255);
                    background: rgb(0, 0, 0);
                }

                @media screen and (max-width: 400px) {
                    font-size: 1.8rem;
                }
            }
        }
    }

    & .content {
        border: solid;
        height: 100rem;
    }
}
```