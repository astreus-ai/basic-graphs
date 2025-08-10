# Basic Graphs

This project demonstrates how to create simple workflow graphs to orchestrate multi-step processes using the Astreus AI framework.

## Features

- **Sequential Workflows**: Chain tasks in logical order
- **Dependency Management**: Define task dependencies and execution order
- **Graph Execution**: Automatic workflow orchestration
- **Result Propagation**: Pass results between connected tasks

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Edit the `.env` file and add your API key:
   - For OpenAI API key: https://platform.openai.com/account/api-keys
   - Alternatively OpenRouter API key: https://openrouter.ai

## Running

```bash
npm run dev
```

## Project Structure

- `index.ts` - Basic graph workflow example
- `.env.example` - Environment variables template
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration

## Graph Workflow Features

This example demonstrates:
- Creating a sequential workflow graph
- Adding tasks with dependencies
- Automatic execution order determination
- Result collection and access

## Code Explanation

```typescript
import { Agent, Graph } from '@astreus-ai/astreus';

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
console.log(results.results[summary].response);
```

## Workflow Benefits

The graph system provides:
1. **Orchestration**: Automatic task execution order
2. **Parallelization**: Independent tasks run concurrently
3. **Error Handling**: Graceful failure management
4. **Result Tracking**: Complete workflow visibility

## Graph Components

**Nodes:**
- Task nodes (AI agent execution)
- Input nodes (external data)
- Output nodes (result collection)

**Edges:**
- Dependencies between tasks
- Data flow connections
- Conditional paths

## Environment Variables

```bash
# Required
OPENAI_API_KEY=sk-your-openai-api-key-here

# Database for graph persistence
DB_URL=sqlite://./astreus.db

# Optional: OpenRouter API Key
OPENROUTER_API_KEY=your-openrouter-api-key-here
```

## Use Cases

**Research Workflows:**
- Data collection → Analysis → Report generation
- Literature review → Synthesis → Publication

**Content Creation:**
- Research → Writing → Editing → Publishing
- Ideation → Development → Review → Release

**Business Processes:**
- Requirements → Design → Implementation → Testing
- Planning → Execution → Monitoring → Reporting

## Next Steps

You can extend this basic graph with:
- Complex branching workflows
- Multi-agent orchestration
- Conditional execution paths
- Real-time monitoring and control

## More Information

- [Astreus AI Documentation](https://astreus.org/docs)
- [Graph Features](https://astreus.org/docs/framework/graph)
- [GitHub Repository](https://github.com/astreus-ai/astreus)