export default {
  projections: {
    ВходСотрудникаE: {
      сотрудник: {
        __caption__: 'Сотрудник',
        фИО: {
          __caption__: 'ФИО'
        },
        должности: {
          __caption__: '',
          должность: {
            __caption__: 'Должность'
          }
        },
        карты: {
          __caption__: '',
          кодКарты: {
            __caption__: ''
          }
        }
      }
    }
  },
  validations: {
    сотрудник: {
      __caption__: 'Сотрудник'
    },
    докРегВхода: {
      __caption__: 'докРегВхода'
    }
  }
};
