import * as React from "react"
import { memo } from "react"

interface IIcon{
    className?: string
}

export const IconSearch = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="11"
        height="11"
        viewBox="0 0 11 11"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M9.25131 9.69231L7.29772 7.7094M8.35311 5.13391C8.35311 7.14794 6.74455 8.78063 4.76029 8.78063C2.77604 8.78063 1.16748 7.14794 1.16748 5.13391C1.16748 3.11988 2.77604 1.48718 4.76029 1.48718C6.74455 1.48718 8.35311 3.11988 8.35311 5.13391Z"
        stroke="#979797"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    </svg>
) )
export const IconFilter = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="26"
        height="32"
        viewBox="0 0 26 32"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M15.1999 17.3764L24.9492 3.50214C25.3997 2.8614 25.6382 2.2158 25.6382 1.67919C25.6382 0.641752 24.7836 -3.53719e-08 23.353 -9.45799e-08L2.28209 -9.66689e-07C0.853226 -1.02583e-06 0.000266999 0.640943 0.000266951 1.67596C0.000266927 2.21338 0.23893 2.84866 0.690729 3.49082L10.4398 17.3716C11.0678 18.2643 11.9128 18.7586 12.8204 18.7586C13.7273 18.7588 14.5721 18.2701 15.1999 17.3764Z"/>
    <rect
        x="10.4883"
        y="15.4483"
        width="4.66144"
        height="16.5517"
        rx="2"/>
    </svg>
) )
export const IconHome = memo( ({ className }: IIcon) => (
    <svg 
        className = {className}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M24.3284 10.8738C24.3279 10.8732 24.3273 10.8727 24.3267 10.8721L14.1277 0.674438C13.6929 0.239563 13.115 0 12.5002 0C11.8854 0 11.3074 0.239372 10.8724 0.674248L0.67873 10.8667C0.675296 10.8702 0.671862 10.8738 0.668429 10.8772C-0.224301 11.775 -0.222775 13.2317 0.672816 14.1272C1.08198 14.5365 1.62239 14.7736 2.20019 14.7984C2.22365 14.8006 2.2473 14.8018 2.27115 14.8018H2.67764V22.3066C2.67764 23.7917 3.88607 25 5.37167 25H9.36187C9.76626 25 10.0944 24.6721 10.0944 24.2676V18.3838C10.0944 17.7061 10.6456 17.1549 11.3234 17.1549H13.6769C14.3547 17.1549 14.9059 17.7061 14.9059 18.3838V24.2676C14.9059 24.6721 15.2339 25 15.6384 25H19.6286C21.1142 25 22.3227 23.7917 22.3227 22.3066V14.8018H22.6996C23.3142 14.8018 23.8922 14.5624 24.3273 14.1275C25.2239 13.2305 25.2242 11.7714 24.3284 10.8738Z"/>
    </svg>
) )
export const IconDiscket = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M4.60301 11.6635H6.27613V13.3366H4.60301V11.6635Z"/>
    <path d="M0 22.3064C0 23.7917 1.20831 25 2.69356 25H22.3063C23.7917 25 25 23.7917 25 22.3064V7.74108H0V22.3064ZM10.1465 10.1987H21.1296C21.534 10.1987 21.862 10.5266 21.862 10.9311C21.862 11.3355 21.534 11.6636 21.1296 11.6636H10.1465C9.74197 11.6636 9.4141 11.3355 9.4141 10.9311C9.4141 10.5266 9.74197 10.1987 10.1465 10.1987ZM10.1465 13.3367H21.1296C21.534 13.3367 21.862 13.6646 21.862 14.0691C21.862 14.4737 21.534 14.8015 21.1296 14.8015H10.1465C9.74197 14.8015 9.4141 14.4737 9.4141 14.0691C9.4141 13.6646 9.74197 13.3367 10.1465 13.3367ZM3.13816 10.9311C3.13816 10.5266 3.46603 10.1987 3.87058 10.1987H7.00855C7.4131 10.1987 7.74097 10.5266 7.74097 10.9311V14.0691C7.74097 14.4737 7.4131 14.8015 7.00855 14.8015H3.87058C3.46603 14.8015 3.13816 14.4737 3.13816 14.0691V10.9311ZM3.87058 16.4747H21.1296C21.534 16.4747 21.862 16.8026 21.862 17.2071C21.862 17.6117 21.534 17.9395 21.1296 17.9395H3.87058C3.46603 17.9395 3.13816 17.6117 3.13816 17.2071C3.13816 16.8026 3.46584 16.4747 3.87058 16.4747ZM3.87058 19.6129H21.1296C21.534 19.6129 21.862 19.9407 21.862 20.3453C21.862 20.7496 21.534 21.0777 21.1296 21.0777H3.87058C3.46603 21.0777 3.13816 20.7496 3.13816 20.3453C3.13816 19.9407 3.46584 19.6129 3.87058 19.6129Z"/>
    <path d="M22.3063 0H2.69356C1.20831 0 0 1.20831 0 2.69357V6.27597H25V2.69357C25 1.20831 23.7917 0 22.3063 0ZM17.9914 4.60284H7.00836C6.604 4.60284 6.27594 4.27496 6.27594 3.87041C6.27594 3.46586 6.604 3.13799 7.00836 3.13799H17.9914C18.396 3.13799 18.7239 3.46586 18.7239 3.87041C18.7239 4.27496 18.396 4.60284 17.9914 4.60284Z"/>
    </svg>
) )
export const IconSocials = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="25"
        height="23"
        viewBox="0 0 25 23"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M21.5923 10.9366C20.3989 11.9356 18.8707 12.5365 17.2071 12.5365C16.6313 12.5365 16.0717 12.4644 15.5367 12.329C16.4934 13.8086 17.0509 15.5772 17.0509 17.4757V20.2642C17.0509 21.3072 16.6759 22.2623 16.0568 23H22.3064C23.7917 23 25 21.7728 25 20.2642V17.4757C25 14.7618 23.6479 12.3629 21.5923 10.9366Z"/>
    <path d="M7.79308 11.0487C10.7924 11.0487 13.2325 8.57059 13.2325 5.52447C13.2325 2.47816 10.7924 0 7.79308 0C4.79377 0 2.3537 2.47816 2.3537 5.52447C2.3537 8.57059 4.79377 11.0487 7.79308 11.0487Z"/>
    <path d="M17.2069 11.0487C20.2062 11.0487 22.6465 8.57059 22.6465 5.52447C22.6465 2.47816 20.2062 0 17.2069 0C15.756 0 14.4361 0.579973 13.4597 1.52354C14.2392 2.65908 14.6972 4.03831 14.6972 5.52447C14.6972 7.01043 14.2392 8.38966 13.4597 9.5252C14.4361 10.4688 15.756 11.0487 17.2069 11.0487Z"/>
    <path d="M12.1782 10.9366C10.985 11.9356 9.45683 12.5365 7.79305 12.5365C6.12927 12.5365 4.6011 11.9358 3.40767 10.9366C1.35212 12.3629 0 14.7618 0 17.4757V20.2642C0 21.7728 1.20831 23 2.69375 23H12.8922C14.3776 23 15.5859 21.7728 15.5859 20.2642V17.4757C15.5859 14.7618 14.234 12.3629 12.1782 10.9366Z"/>
    </svg>
) )
export const IconMail = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="25"
        height="17"
        viewBox="0 0 25 17"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M16.5719 8.62673L25 13.8967V3.13418L16.5719 8.62673Z"

    />
    <path d="M0 3.13418V13.8967L8.42813 8.62673L0 3.13418Z"/>
    <path d="M23.4375 0H1.5625C0.782812 0 0.164062 0.574909 0.046875 1.31518L12.5 9.43036L24.9531 1.31518C24.8359 0.574909 24.2172 0 23.4375 0Z"/>
    <path d="M15.1406 9.56018L12.9297 11.0005C12.7984 11.0855 12.65 11.1273 12.5 11.1273C12.35 11.1273 12.2016 11.0855 12.0703 11.0005L9.85938 9.55864L0.05 15.6956C0.170313 16.4297 0.785937 17 1.5625 17H23.4375C24.2141 17 24.8297 16.4297 24.95 15.6956L15.1406 9.56018Z"/>
    </svg>
) )
export const IconPlay = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="19"
        height="25"
        viewBox="0 0 19 25"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M17.6 10.1785L3.5472 0.671863C2.89822 0.232521 2.24432 0 1.7008 0C0.65001 0 0 0.833353 0 2.22828V22.775C0 24.1683 0.649191 25 1.69752 25C2.24186 25 2.88532 24.7673 3.53574 24.3267L17.5951 14.8203C18.4993 14.2079 19 13.3838 19 12.4989C19.0002 11.6145 18.5052 10.7907 17.6 10.1785Z"/>
    </svg>
) )
export const IconStatisticks = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M24.2676 23.5352H0.732422C0.327588 23.5352 0 23.8627 0 24.2676C0 24.6724 0.327588 25 0.732422 25H24.2676C24.6724 25 25 24.6724 25 24.2676C25 23.8627 24.6724 23.5352 24.2676 23.5352Z"/>
    <path d="M6.64062 11.7676H2.19727C1.79243 11.7676 1.46484 12.0952 1.46484 12.5V16.1621H7.37305V12.5C7.37305 12.0952 7.04546 11.7676 6.64062 11.7676Z"/>
    <path d="M7.37305 17.627H1.46484V22.0703H7.37305V17.627Z"/>
    <path d="M14.6973 5.9082H10.3027C9.8979 5.9082 9.57031 6.23579 9.57031 6.64062V16.1621H15.4297V6.64062C15.4297 6.23579 15.1021 5.9082 14.6973 5.9082Z"/>
    <path d="M15.4297 17.627H9.57031V22.0703H15.4297V17.627Z"/>
    <path d="M22.8027 0H18.3594C17.9545 0 17.627 0.327588 17.627 0.732422V7.37305H23.5352V0.732422C23.5352 0.327588 23.2076 0 22.8027 0Z"/>
    <path d="M23.5352 8.83789H17.627V22.0703H23.5352V8.83789Z"/>
    </svg>
) )
export const IconSettings = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M23.8636 9.09091H22.1448C22.0245 8.75091 21.8861 8.4172 21.7299 8.09121L22.9458 6.8753C23.3896 6.43159 23.3896 5.71205 22.9459 5.26826L19.7318 2.05417C19.5186 1.84106 19.2296 1.72129 18.9283 1.72129C18.6269 1.72129 18.3379 1.84098 18.1248 2.05417L16.9088 3.27008C16.5827 3.11402 16.2491 2.97553 15.9091 2.85523V1.13636C15.9091 0.508788 15.4003 0 14.7727 0H10.2273C9.5997 0 9.09091 0.508788 9.09091 1.13636V2.85523C8.75091 2.97553 8.4172 3.11402 8.09129 3.27008L6.8753 2.05417C6.43159 1.61038 5.71205 1.61038 5.26826 2.05417L2.05409 5.26818C1.84091 5.48129 1.72121 5.7703 1.72121 6.07174C1.72121 6.37311 1.84091 6.66212 2.05409 6.87523L3.27 8.09121C3.11394 8.4172 2.97553 8.75091 2.85523 9.09091H1.13636C0.508788 9.09091 0 9.5997 0 10.2273V14.7727C0 15.4003 0.508788 15.9091 1.13636 15.9091H2.85523C2.97553 16.2491 3.11394 16.5828 3.27 16.9088L2.05409 18.1248C1.84091 18.3379 1.72121 18.6269 1.72121 18.9283C1.72121 19.2297 1.84091 19.5187 2.05409 19.7318L5.26833 22.9459C5.71212 23.3896 6.43159 23.3896 6.87538 22.9459L8.09136 21.73C8.41727 21.8861 8.75099 22.0245 9.09091 22.1448V23.8636C9.09091 24.4912 9.5997 25 10.2273 25H14.7727C15.4003 25 15.9091 24.4912 15.9091 23.8636V22.1448C16.2491 22.0245 16.5828 21.886 16.9088 21.7299L18.1248 22.9458C18.5686 23.3895 19.288 23.3896 19.7318 22.9458L22.9459 19.7317C23.3897 19.288 23.3897 18.5685 22.9459 18.1247L21.73 16.9088C21.8861 16.5828 22.0246 16.249 22.1449 15.9091H23.8636C24.4912 15.9091 25 15.4003 25 14.7727V10.2273C25 9.5997 24.4912 9.09091 23.8636 9.09091ZM12.5 17.0455C9.99364 17.0455 7.95455 15.0064 7.95455 12.5C7.95455 9.99364 9.99364 7.95455 12.5 7.95455C15.0064 7.95455 17.0455 9.99364 17.0455 12.5C17.0455 15.0064 15.0064 17.0455 12.5 17.0455Z"/>
    </svg>
) )
export const IconMoon = memo( ({ className }: IIcon) => (
    <svg
        className = {className}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M5.27742 9.75134C7.09544 9.77048 8.75613 8.7229 9.52193 7.07398C9.03998 7.28426 8.51801 7.38724 7.99231 7.37581C5.93162 7.37349 4.26166 5.70353 4.25934 3.64284C4.27997 2.24894 5.04909 0.973929 6.27239 0.305398C5.94248 0.263392 5.60999 0.244584 5.27742 0.249224C2.65342 0.249224 0.526367 2.37636 0.526367 5.00028C0.526367 7.62428 2.65342 9.75134 5.27742 9.75134Z"/>
    </svg>
) )