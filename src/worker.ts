import keccak256 from './lib/keccak256';
import MerkleTree from 'merkletreejs';
import addresses from './addresses';

const CORS_ORIGIN = '*';

export default {
	async fetch(request: Request): Promise<Response> {
		switch (request.method) {
			case 'OPTIONS':
				return new Response(null, {
					status: 200,
					headers: {
						'Access-Control-Allow-Origin': CORS_ORIGIN,
						'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
						'Access-Control-Allow-Methods': 'GET',
					},
				});
			case 'GET':
				const url = new URL(request.url);
				const address = url.searchParams.get('address');

				if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
					return new Response(null, { status: 400 });
				}

				const leaves = addresses.map((a) => keccak256(a));
				const tree = new MerkleTree(leaves, keccak256, { sort: true });

				const proof = tree.getHexProof(keccak256(address));

				return new Response(JSON.stringify({ data: proof }), {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': CORS_ORIGIN,
						'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
						'Access-Control-Allow-Methods': 'GET',
					},
				});
			default:
				return new Response(null, { status: 405 });
		}
	},
};
