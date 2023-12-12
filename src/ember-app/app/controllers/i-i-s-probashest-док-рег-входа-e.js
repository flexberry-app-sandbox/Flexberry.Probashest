import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-probashest-док-рег-входа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-probashest-вход-гостя+гость':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'гость',
            projection: 'ГостьL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-probashest-вход-гостя+карты':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодКарты',
            required: true,
            relationName: 'карты',
            projection: 'КартыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
