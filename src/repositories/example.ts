import { getRepository } from 'typeorm';
import Example from './entities/Example';

async function searchAllExamples(): Promise<Example[]> {
	return getRepository(Example).find();
}

export default { searchAllExamples };
