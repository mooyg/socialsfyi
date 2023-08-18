export class EntityConflictException extends Error {
  constructor() {
    super("Conflict occured");
  }
}
