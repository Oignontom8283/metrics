interface Env {
  METRICS_KV: KVNamespace;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response("Bonjour le monde!");
	},
} satisfies ExportedHandler<Env>;
