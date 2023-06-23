# Security Policy

## Reporting a Vulnerability

To report a vulnerability please send an email with the details to soulimane.a@protonmail.com. The vulnerability report must include a proof-of-concept of the exploit, or at least a few pointers that can help us assess the risk level.

## Vulnerabilities in Listify dependencies

If you receive a security warning relative to a dependency of Listify, before reporting it to us please make sure that at least one of the following is true:

1. The version of that dependency containing the security fix is not compatible with the semver range that Listify uses to depend on it.
2. The vulnerability affects Listify usage of that dependency.

Note that if (1) is true but (2) is false, we will consider it as a low-level vulnerability and might decide not to fix it.

---

Thank you for helping to keep Listify secure.
