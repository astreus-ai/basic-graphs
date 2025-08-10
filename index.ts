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
    name: 'research-workflow',
    defaultAgentId: agent.id
  });

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
  console.log('Research summary:', results.results[summary].response);
}

main().catch(console.error);