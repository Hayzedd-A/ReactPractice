const sideMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
    subMenu: [
      {
        label: "Customers",
        to: "/about/customers",
        subMenu: [
          {
            label: "Customer 1",
            to: "/about/customers/customer1",
          },
          {
            label: "Customer 2",
            to: "/about/customers/customer2",
          },
        ],
      },
      {
        label: "Employees",
        to: "/about/employees",
        subMenu: [
          {
            label: "Employee 1",
            to: "/about/employees/employee1",
          },
          {
            label: "Employee 2",
            to: "/about/employees/employee2",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    subMenu: [
      {
        label: "Service 1",
        to: "/services/service1",
      },
      {
        label: "Service 2",
        to: "/services/service2",
      },
    ],
  },
];

export default sideMenu;
