import exampleRepository from '../repositories/example';
import NoContentError from '../errors/NoContent';
import Example from '../repositories/entities/Example';

async function searchExamples(): Promise<Example[]> {
	const examples = await exampleRepository.searchAllExamples();

	if (examples.length === 0) {
		throw new NoContentError('There are no examples');
	}

	return examples;
}

export default { searchExamples };
