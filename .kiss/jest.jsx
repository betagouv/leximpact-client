/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { createShallow } from "@material-ui/core/test-utils"

import MyComponent from "../index"

describe("components | path | to | index", () => {
  let shallow
  beforeAll(() => {
    const options = { dive: true }
    shallow = createShallow(options)
  })

  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = {}
      const wrapper = shallow(<MyComponent {...props} />)
      expect(wrapper).toBeDefined()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
