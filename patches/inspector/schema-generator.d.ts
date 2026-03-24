import type { JSONValue } from '@pikku/core';
import type { InspectorLogger, InspectorState } from '../types.js';
export declare function generateAllSchemas(logger: InspectorLogger, config: {
    tsconfig: string;
    schemasFromTypes?: string[];
    schema?: {
        additionalProperties?: boolean;
    };
}, state: InspectorState): Promise<Record<string, JSONValue>>;
