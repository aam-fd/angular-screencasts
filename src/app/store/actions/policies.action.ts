export const GET_POLICIES_PENDING = 'GET_POLICIES_PENDING';
export const GET_POLICIES_SUCCESS = 'GET_POLICIES_SUCCESS';
export const GET_POLICIES_ERROR = 'GET_POLICIES_ERROR';

export class GetPoliciesPending {
  public type = GET_POLICIES_PENDING;
}

export class GetPoliciesSuccess {
  public type = GET_POLICIES_SUCCESS;

  constructor(public payload: []) {}
}

export class GetPoliciesError {
  public type = GET_POLICIES_ERROR;
  constructor(public payload: any) {}
}
