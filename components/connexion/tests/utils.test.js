import { roles as AVAILABLE_ROLES } from "../config.json";
import {
  parseFormValuesUserEmail,
  shouldShowFieldError,
  updateDomainsWhenRoleChange,
  validateEmailInputField,
} from "../utils";

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
        dirtySinceLastSubmit: false,
        error: "any error message",
        submitError: null,
        touched: false,
      };
      const result = shouldShowFieldError(given);
      expect(typeof result).toEqual("boolean");
    });

    describe("doit retourner une erreur", () => {
      it("quand l'API a retourné une erreur", () => {
        const given = {
          dirtySinceLastSubmit: false,
          error: null,
          submitError: "any error message",
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(true);
      });

      it("quand la validation du champ a échoué", () => {
        const given = {
          dirtySinceLastSubmit: true,
          error: "any error message",
          submitError: null,
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(true);
      });
    });

    describe("ne doit pas retourner d'erreur", () => {
      it("quand le champ n'a jamais ete modifié", () => {
        const given = {
          dirtySinceLastSubmit: false,
          error: "any error message",
          submitError: null,
          touched: false,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(false);
      });

      it("quand la validation du champ est OK", () => {
        const given = {
          dirtySinceLastSubmit: false,
          error: null,
          submitError: null,
          touched: true,
        };
        const result = shouldShowFieldError(given);
        expect(result).toEqual(false);
      });

      it("quand le champ a changé depuis le dernier submit", () => {
        const given = {
          dirtySinceLastSubmit: true,
          error: null,
          submitError: "any submit error",
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
      const expected = ["@clb-an.fr", "@clb-dep.fr", "@assemblee-nationale.fr", "@groupe-udiagir.fr", "@an-en-marche.fr", "@gsan.org"];
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
        admin: {
          default: false,
          disabled: false,
          domains: ["@assemblee-nationale.fr"],
          label: "Administrat·eur·rice Assemblée nationale",
        },
        collab: {
          default: false,
          disabled: false,
          domains: ["@clb-an.fr", "@clb-dep.fr", "@assemblee-nationale.fr", "@groupe-udiagir.fr", "@an-en-marche.fr", "@gsan.org"],
          label: "Collaborat·eur·rice Assemblée nationale",
        },
        depute: {
          default: true,
          disabled: false,
          domains: ["@assemblee-nationale.fr"],
          label: "Député·e",
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
