import { NamespaceBuilder } from '@rdfjs/namespace';
import { NamedNode } from '@rdfjs/types';

import rdfEnvironment from '@zazuko/env';

import { Ontology } from '../ontology';

class RdfsOntology extends Ontology {

    constructor() {
        super(rdfEnvironment.namespace<string>('http://www.w3.org/2000/01/rdf-schema#'));
    }

    get namespace(): NamespaceBuilder<string> {
        return this._namespace;
    }

    prefix(): string {
        return 'rdfs';
    }

    sparqlPrefix(): string {
        return `PREFIX ${this.prefix()}: <${this.namespace[''].value}> `;
    }

    turtlePrefix(): string {
        return `@prefix ${this.prefix()}: <${this.namespace[''].value}> .`;
    }

    /**
     * Get the label predicate.
     * 
     * @readonly
     */
    get label(): string {
        return this.namespace('label').value;
    }

    /**
     * Get the prefixed label predicate.
     * 
     * @readonly
     */
    get labelPrefixed(): string {
        return `${this.prefix()}:label`;
    }

    /**
     * Get the label predicate as NamedNode.
     */

    get labelNamedNode(): NamedNode {
        return this.namespace('label');
    }

    /**
     * Get the comment predicate.
     *
     * @readonly
     */
    get comment(): string {
        return this.namespace('comment').value;
    }

    /**
     * Get the prefixed comment predicate.
     *
     * @readonly
     */
    get commentPrefixed(): string {
        return `${this.prefix()}:comment`;
    }

    /**
     * Get the comment predicate as NamedNode.
     * 
     * @readonly
     */
    get commentNamedNode(): NamedNode {
        return this.namespace('comment');
    }

    /**
     * Get the Class class.
     *
     * @readonly
     */
    get Class(): string {
        return this.namespace('Class').value;
    }

    /**
     * Get the prefixed Class class.
     *
     * @readonly
     */
    get ClassPrefixed(): string {
        return `${this.prefix()}:Class`;
    }

    /**
     * Get the Class class as NamedNode.
     * 
     * @readonly
     */
    get ClassNamedNode(): NamedNode {
        return this.namespace('Class');
    }

    /**
     * Get the subClassOf predicate.
     *
     * @readonly
     */
    get subClassOf(): string {
        return this.namespace('subClassOf').value;
    }

    /**
     * Get the prefixed subClassOf predicate.
     *
     * @readonly
     */
    get subClassOfPrefixed(): string {
        return `${this.prefix()}:subClassOf`;
    }

    /**
     * Get the subClassOf predicate as NamedNode.
     * 
     * @readonly
     */
    get subClassOfNamedNode(): NamedNode {
        return this.namespace('subClassOf');
    }

}

export const rdfs = new RdfsOntology();
