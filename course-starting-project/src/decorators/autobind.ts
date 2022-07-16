namespace App {
    // autobind decorator
    export function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const bound = originalMethod.bind(this);
                return bound
            }
        }

        return adjDescriptor;
    }
}