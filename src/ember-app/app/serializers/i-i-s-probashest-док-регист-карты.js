import { Serializer as ДокРегистКартыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probashest-док-регист-карты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокРегистКартыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
