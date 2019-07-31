/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  max-nested-callbacks: [2, { "max": 4 }]
*/
import {
  parseFormValuesUserEmail,
  shouldShowFieldError,
  updateDomainsWhenRoleChange,
  validateEmailInputField,
} from "../utils";

import { roles as AVAILABLE_ROLES } from "../config.json";

describe("components | connexion | utils", () => {
  describe("parseFormValuesUserEmail", () => {
    it("retourne un email composé par les valeurs du form", () => {
      const given = { domain: "@mail.com", username: "username" };
      const result = parseFormValuesUserEmail(given);
      expect(result).toEqual("username@mail.com");
    });
  });

  describe("shouldShowFieldError", () => {
    it("doit retourner un boolean", () => {
      const given = {
        submitError: null,
        dirtySinceLastSubmit: false,
        error: "any error message",
        touched: false,
      };
      const result = shouldShowFieldError(given);
      expect(typeof result).toEqual("boolean");
    });

    describe("doit retourner une erreur", () => {
      it("quand l'API a retourné une erreur", () => {
        const given = {
          submitError: "any error message",
          dirtySinceLastSubmit: false,
          error: null,
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(true);
      });

      it("quand la validation du champ a échoué", () => {
        const given = {
          submitError: null,
          dirtySinceLastSubmit: true,
          error: "any error message",
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(true);
      });
    });

    describe("ne doit pas retourner d'erreur", () => {
      it("quand le champ n'a jamais ete modifié", () => {
        const given = {
          submitError: null,
          dirtySinceLastSubmit: false,
          error: "any error message",
          touched: false,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(false);
      });

      it("quand la validation du champ est OK", () => {
        const given = {
          submitError: null,
          dirtySinceLastSubmit: false,
          error: null,
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(false);
      });

      it("quand le champ a changé depuis le dernier submit", () => {
        const given = {
          submitError: "any submit error",
          dirtySinceLastSubmit: true,
          error: null,
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(false);
      });
    });
  });

  describe("updateDomainsWhenRoleChange", () => {
    it("retourne les noms de domaine pour un député", () => {
      const given = "depute";
      const result = updateDomainsWhenRoleChange(given);
      const expected = ["@assemblee-nationale.fr"];
      expect(result).toStrictEqual(expected);
    });

    it("retourne les noms de domaine pour un collaborateur", () => {
      const given = "collab";
      const result = updateDomainsWhenRoleChange(given);
      const expected = ["@clb-an.fr", "@clb-dep.fr"];
      expect(result).toStrictEqual(expected);
    });

    it("retourne les noms de domaine pour un admin", () => {
      const given = "admin";
      const result = updateDomainsWhenRoleChange(given);
      const expected = ["@assemblee-nationale.fr"];
      expect(result).toStrictEqual(expected);
    });
  });

  describe("validateEmailInputField", () => {
    describe("retourne un message d'erreur", () => {
      it("si le champ est vide", () => {
        const given = "";
        const result = validateEmailInputField(given);
        expect(result).toEqual("Ce champs est requis");
      });

      it("si le champ contient est une adresse email", () => {
        const given = "username@email.com";
        const result = validateEmailInputField(given);
        expect(result).toEqual(
          "Le @ et le nom de domaine de votre adresse est déjà inscrit par défaut, merci de ne pas l'écrire dans le champ",
        );
      });
    });

    describe("ne retourne pas de message d'erreur", () => {
      it("si le champ est rempli", () => {
        const given = "username";
        const result = validateEmailInputField(given);
        expect(result).toEqual(undefined);
      });
    });
  });

  describe("available roles from config", () => {
    it("retourne une map d'elements", () => {
      const given = {
        depute: {
          default: true,
          disabled: false,
          domains: ["@assemblee-nationale.fr"],
          label: "Député·e",
        },
        collab: {
          default: false,
          disabled: false,
          domains: ["@clb-an.fr", "@clb-dep.fr"],
          label: "Collaborat·eur·rice Assemblée nationale",
        },
        admin: {
          default: false,
          disabled: false,
          domains: ["@assemblee-nationale.fr"],
          label: "Administrat·eur·rice Assemblée nationale",
        },
        senat: {
          default: false,
          disabled: true,
          domains: [],
          label: "Sénat·eur·rice",
        },
        senatcollab: {
          default: false,
          disabled: true,
          domains: [],
          label: "Collaborat·eur·rice Sénat",
        },
      };
      expect(given).toStrictEqual(AVAILABLE_ROLES);
    });
  });
});
