import { Serializer as ДокРегВходаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probashest-док-рег-входа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокРегВходаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
