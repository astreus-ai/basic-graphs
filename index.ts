import { config } from 'dotenv';
import { Agent, Graph } from '@astreus-ai/astreus';

// Load environment variables
config();

async function main() {
  // Create an agent
  const agent = await Agent.create({
    name: 'WorkflowAgent',
    model: 'gpt-4o'
  });

  // Create a simple sequential graph
  const graph = new Graph({
    name: 'research-workflow'
  }, agent);

  // Add tasks with dependencies
  const research = graph.addTaskNode({
    prompt: 'Research artificial intelligence trends'
  });

  const summary = graph.addTaskNode({
    prompt: 'Summarize the research findings',
    dependencies: [research]
  });

  // Execute the workflow
  const results = await graph.run();
  
  // Parse the result and extract the response
  if (results.success && results.results[summary]) {
    const summaryResult = JSON.parse(results.results[summary] as string);
    console.log('Research summary:', summaryResult.response);
  } else {
    console.log('Workflow failed or no summary available');
    console.log('Errors:', results.errors);
  }
}

main().catch(console.error);