const baseSeuils = [9964, 27519, 73779, 156244]
const baseTaux = [14, 30, 41, 45]
const casTypesDefault = true
const loading = false
const indextab = 0

const casTypes = [
    {
        outre_mer: 0,
        nombre_declarants: 1,
        nombre_declarants_retraites: 0,
        nombre_personnes_a_charge: 0,
        revenu: 15600,
    },
    {
        outre_mer: 0,
        nombre_declarants: 1,
        nombre_declarants_retraites: 0,
        nombre_personnes_a_charge: 1,
        revenu: 31200,
    },
    {
        outre_mer: 0,
        nombre_declarants: 2,
        nombre_declarants_retraites: 0,
        nombre_personnes_a_charge: 0,
        revenu: 38400,
    },
    {
        outre_mer: 0,
        nombre_declarants: 2,
        nombre_declarants_retraites: 2,
        nombre_personnes_a_charge: 0,
        revenu: 15600,
    },
    {
        outre_mer: 0,
        nombre_declarants: 2,
        nombre_declarants_retraites: 0,
        nombre_personnes_a_charge: 2,
        revenu: 55200,
    },
    {
        outre_mer: 1,
        nombre_declarants: 2,
        nombre_declarants_retraites: 0,
        nombre_personnes_a_charge: 2,
        revenu: 55200,
    },
]

const reforme = {
    impot_revenu: {
        bareme: {
            seuils: baseSeuils,
            taux: baseTaux,
        },
        decote: {
            seuil_celib: 1196,
            seuil_couple: 1970,
        },
    },
}

const reformeBase = {
    impot_revenu: {
        bareme: {
            seuils: baseSeuils,
            taux: baseTaux,
        },
        decote: {
            seuil_celib: 1196,
            seuil_couple: 1970,
        },
    },
}

const resBrut = {
    apres: {
        [(0).toString()]: 0,
        [(1).toString()]: -626,
        [(2).toString()]: 0,
        [(3).toString()]: 0,
        [(4).toString()]: -492,
        [(5).toString()]: 0,
    },
    avant: {
        [(0).toString()]: 0,
        [(1).toString()]: -626,
        [(2).toString()]: 0,
        [(3).toString()]: 0,
        [(4).toString()]: -492,
        [(5).toString()]: 0,
    },
    wprm: {
        [(0).toString()]: 1,
        [(1).toString()]: 1,
        [(2).toString()]: 1,
        [(3).toString()]: 1,
        [(4).toString()]: 1,
        [(5).toString()]: 1,
    },
}

const totalPop = {
    total: {
        avant: 78000000000,
        apres: 78000000001,
    },
    deciles: [
        {
            apres: 0,
            avant: 0,
            poids: 64307.76825466227,
        },
        {
            apres: 0,
            avant: 0,
            poids: 64183.43260141487,
        },
        {
            apres: 0,
            avant: 0,
            poids: 64069.076685097796,
        },
        {
            apres: 0,
            avant: 0,
            poids: 64043.933126049116,
        },
        {
            apres: 13844921.403083913,
            avant: 5361568.370960628,
            poids: 64488.07944238707,
        },
        {
            apres: 84836413.06561384,
            avant: 56347916.71439952,
            poids: 63989.23676160828,
        },
        {
            apres: 165934580.50712466,
            avant: 135607522.52963728,
            poids: 64047.4107078861,
        },
        {
            apres: 278744596.67872584,
            avant: 236768570.59332725,
            poids: 64349.98292025551,
        },
        {
            apres: 505687176.9815335,
            avant: 458387176.6722295,
            poids: 63775.046068296535,
        },
        {
            apres: 2794871767.6868806,
            avant: 2740522398.065867,
            poids: 63647.22070607485,
        },
    ],
}

const initialState = {
    cas_types_defaut: casTypesDefault,
    loading,
    indextab,
    cas_types: casTypes,
    reforme,
    reformebase: reformeBase,
    res_brut: resBrut,
    total_pop: totalPop,
}

export default initialState
