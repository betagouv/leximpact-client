/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { generateServerDynamicRoutes } from "../generateServerDynamicRoutes";

const mockDynamicRoutes = {
  "path/to/route": {
    page: "/",
    query: () => {},
  },
};
const mockApp = { render: jest.fn() };
const mockServer = { get: jest.fn() };

describe("lib | generateServerDynamicRoutes", () => {
  afterEach(() => {
    mockServer.get.mockClear();
  });

  it("doit appeler la methode get du server", () => {
    generateServerDynamicRoutes(mockApp, mockServer, mockDynamicRoutes);
    expect(mockServer.get).toHaveBeenCalledTimes(1);
  });
});
