import { createTodoUseCase } from '../usecases/create-todo-usecase';
import { revalidatePath } from 'next/cache';

export async function createTodoAction(description: string) {
  //Client Component
  //useActionState-> forms->parametros->  state: any, formData:formDate ->
  // return state
  // useTransition-> any->parametros-> o que voce quiser-> return any
  // useOptimistic (executar a acao antes de ter o resultado final)-> any
  // parametros-> state, updateFn(currentValue, optmisticValue)
  'use server';
  const createResult = await createTodoUseCase(description);

  if (createResult.success) {
    revalidatePath('/');
  }
  return createResult;
}
